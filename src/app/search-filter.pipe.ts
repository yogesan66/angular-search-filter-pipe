import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, studentname:string): any {
    /*if(!value) return[];
    if(!animalname) return value;
    return value.filter((animal)=>{
      return animal.toLowerCase().includes(animalname);
    })*/
    if(!value) return [];
    if(!studentname) return value;
    return value.filter((name)=>{
      return name.toLowerCase().includes(studentname)
    })
  }

}


