import { LightningElement } from 'lwc';

export default class ForEachLoop extends LightningElement {

    employeeList=[
        {
        fName:'Mukilan',
        lName:'Selvadurai',
        age:29,
        city:'Dindigul'
    },
    {
        fName:'Mohanraj',
        lName:'Raghupathi',
        age:25,
        city:'Devinaickenpatti'
    },
    {
        fName:'Vadivel',
        lName:'Murugesan',
        age:24,
        city:'Vedasandur'
    }
]
}