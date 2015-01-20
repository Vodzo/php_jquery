var pQuery = {
	run: function (string)
	{
		for (x in string)
		{
			var object = string[x];
			this.parse_object(object, $(object.selector));
		}
	},
	parse_object: function (object, that)
	{
		if(typeof(object.method) !== 'undefined')
		{
		for(y in object.method)
			{
			var methodName = object.method[y];
			var selector = $(object.selector);
			if(that !== undefined)
				{
				selector = that;
				}
			if(object.arguments[y].length > 0)
				{
				var arguments = [];
				
				for(z in object.arguments[y])
					{
					var child_object = object.arguments[y][z];
					if(child_object.arguments !== undefined && child_object.arguments.length > 0)
						{
						if(child_object.selector !== undefined)
							{
							arguments.push(this.parse_object(child_object));		
							}
						else
							{
							arguments.push(this.parse_object(child_object, selector));		
							}
						}
					else if(child_object.selector !== undefined)
						{
						arguments.push(this.parse_object(child_object, selector));		
						}
					else
						{
						arguments.push(child_object);	
						}
					}
					
				if(y == (object.method.length - 1))
					{
					return selector[methodName].apply(selector, arguments);
					}
				else
					{
					selector[methodName].apply(selector, arguments);
					}
				}
			else
				{
				if(y == (object.method.length - 1))
					{
					return selector[methodName]();
					}
				else
					{
					selector[methodName]();
					}
				}
			}
		}
		else if(typeof(object.selector) !== 'undefined')
		{
			return $(object.selector);
		}
	}
}

