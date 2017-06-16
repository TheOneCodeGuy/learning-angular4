import { Pipe, PipeTransform } from '@angular/core'

@Pipe ({
	name: 'sort'
})

export class SortPipe implements PipeTransform {
	
	transform(value : string[], args1 : string, args2 : string) : string[] {
		if (args2 == 'u') {
			for (var i = 0; i < value.length; ++i) {
				value[i] = value[i].toUpperCase();
			}
		}
		if(args1 === 'asc'){
			return value.sort();
		}
		else if (args1 === 'des') {
			return value.sort().reverse();
		}
	}

}