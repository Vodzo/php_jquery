var pQuery = {
	run: function (string)
	{
		for (x in string)
		{
			var object = string[x];
			this.parse_object(object);
		}
	},
	parse_object: function (object)
	{
		for(y in object.method)
			{
			var methodName = object.method[y];
			if(object.arguments[y].length > 0)
				{
				var arguments = [];
				for(z in object.arguments[y])
					{
					var child_object = object.arguments[y][z];
					if(child_object.arguments !== undefined && child_object.arguments.length > 0)
						{
						arguments.push(this.parse_object(child_object));		
						}
					else
						{
						arguments.push(child_object);	
						}
					}
				$(object.selector)[methodName].apply($(object.selector), arguments);
				}
			else
				{
				return $(object.selector)[methodName]();
				}
			}
	}
}















