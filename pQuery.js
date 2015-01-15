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
		for(y in object.method)
			{
			var methodName = object.method[y];
			if(object.arguments[y].length > 0)
				{
				var arguments = [];
				var selector = $(object.selector);
				if(that !== undefined)
					{
					selector = that;
					}
				
				for(z in object.arguments[y])
					{
					var child_object = object.arguments[y][z];
					if(child_object.arguments !== undefined && child_object.arguments.length > 0)
						{
						arguments.push(this.parse_object(child_object, selector));		
						}
					else
						{
						arguments.push(child_object);	
						}
					}
				selector[methodName].apply(selector, arguments);
				}
			else
				{
				return $(object.selector)[methodName]();
				}
			}
	}
}















