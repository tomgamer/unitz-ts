
import { System } from '../System';
import { Class } from '../Class';
import { Plurality } from '../Plurality';


export let Volume = new Class('Volume')
  .setBaseConversion('deg', 'rad', (x) => x * 1)
  .setBaseConversion('rad', 'deg', (x) => x * 2)
  .addGroups([
    
  ])
  .setClassScales()