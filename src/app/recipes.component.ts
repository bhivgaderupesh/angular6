import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }
  private sheetData :any [];
  ngOnInit() {
    this.sheetData=[];
    this.readSheetData();
    
    console.log(this.sheetData);
  }

  

  readSheetData(){
    this.sheetData =
[
  {L0:'global', L1:'',L2:'',L3:'',L4:'',L5:'',L6:'',L7:'',L8:'',L9:'',L10:'',L11:'',L12:'',L13:'',L14:'',L15:'',L16:'global',L17:'global',countrycode:'',countrytype:''},
  {L0:'global', L1:'America',L2:'',L3:'',L4:'',L5:'',L6:'',L7:'',L8:'',L9:'',L10:'',L11:'',L12:'',L13:'',L14:'',L15:'',L16:'America',L17:'region',countrycode:'',countrytype:''},
  {L0:'global', L1:'America',L2:'Latinmerica',L3:'',L4:'',L5:'',L6:'',L7:'',L8:'',L9:'',L10:'',L11:'',L12:'',L13:'',L14:'',L15:'',L16:'Latinmerica',L17:'subregion',countrycode:'',countrytype:''},
  {L0:'global', L1:'America',L2:'Latinmerica',L3:'Southmerica',L4:'',L5:'',L6:'',L7:'',L8:'',L9:'',L10:'',L11:'',L12:'',L13:'',L14:'',L15:'',L16:'Southmerica',L17:'continent',countrycode:'',countrytype:''},
  {L0:'global', L1:'America',L2:'Latinmerica',L3:'Southmerica',L4:'carrabean',L5:'',L6:'',L7:'',L8:'',L9:'',L10:'',L11:'',L12:'',L13:'',L14:'',L15:'',L16:'carrabean',L17:'subcontinent',countrycode:'',countrytype:''},
  {L0:'global', L1:'America',L2:'Latinmerica',L3:'Southmerica',L4:'carrabean',L5:'aungilia',L6:'',L7:'',L8:'',L9:'',L10:'',L11:'',L12:'',L13:'',L14:'',L15:'',L16:'aungilia',L17:'country',countrycode:'',countrytype:''},
  {L0:'global', L1:'America',L2:'Latinmerica',L3:'Southmerica',L4:'carrabean',L5:'aungilia',L6:'',L7:'',L8:'',L9:'',L10:'',L11:'',L12:'',L13:'',L14:'',L15:'',L16:'abc',L17:'city',countrycode:'',countrytype:''}
];
  }

  validateData(){
   var columns=[
    {0:'L0'},
    {1:'L1'},
    {2:'L2'},
    {3:'L3'},
    {4:'L4'},
    {5:'L5'},
    {6:'L6'},
    {7:'L7'},
    { 8:'L8'},
    {9:'L9'},
    {10:'L10'},
    {11:'L11'},
    {12:'L12'},
    {13:'L13'},
    {14:'L14'},
    {15:'L15'},
    {16:'shortname'},
    {17:'category'},
    {18:'coutrycode'},
    {19:'countrytype'}
   ];
    
    console.log("in ValidateData");
    console.log(this.sheetData);
    let prevVall = '';
      let curVall = '';
      let categoryObject ={};
      let categoryObjList =[];
      var uniqueMap = new Map();
      let parentRow = -1;
     // let uniqueName = '';
    this.sheetData.forEach(rowObj => {
      parentRow++;
      let row = -1;
      let uniqueName = '';
      columns.forEach(column => {
        row++;
        prevVall = curVall;
        curVall = rowObj[column[row]];

        
          if((!(prevVall != '' && curVall == '')) && curVall != '' && curVall !=undefined){
            uniqueName =uniqueName+'-'+curVall;
          }
        

        if(prevVall != '' && curVall == ''){
          if(rowObj[column[row]].toString().toLowerCase().trim()=='global'){
          categoryObject = {id:1,name:'global'};
          }else if(rowObj[column[row]].toString().toLowerCase().trim()=='region'){
            categoryObject = {id:2,name:'region'};
            }else if(rowObj[column[row]].toString().toLowerCase().trim()=='subregion'){
              categoryObject = {id:3,name:'subregion'};
              }else if(rowObj[column[row]].toString().toLowerCase().trim()=='continent'){
                categoryObject = {id:4,name:'continent'};
                }else if(rowObj[column[row]].toString().toLowerCase().trim()=='subcontinent'){
                  categoryObject = {id:5,name:'subcontinent'};
                  }else if(rowObj[column[row]].toString().toLowerCase().trim()=='country'){
                    categoryObject = {id:6,name:'country'};
                    }else if(rowObj[column[row]].toString().toLowerCase().trim()=='city'){
                      categoryObject = {id:7,name:'city'};
                      }
                      categoryObjList.push(categoryObject);

        }
        
      });
      //curVall = rowObj.
      uniqueName = uniqueName.substr(1);
      uniqueMap.set(parentRow+1,uniqueName);
      


    });
  
    let isUniqueValue:boolean=true;
    let checkUniqueList = [];

    Array.from(uniqueMap.values()).forEach(entry=>checkUniqueList.push(entry));

    console.log("Rupesh",checkUniqueList);

    for(var i=0; i<checkUniqueList.length;i++){
      for(var j=0; j<checkUniqueList.length; j++){
        if(i != j){
        if(checkUniqueList[i] == checkUniqueList[j]){
          isUniqueValue = false;
        }
      }
      }
    }

    console.log("uniqvalue",isUniqueValue);
    
  //   for (let entry of Array.from(uniqueMap.entries())) {
  //     //let key = entry[0];
  //     let value = entry[1];
  //     console.log(value);
  //     let valueCount = 0;
  //     for (let entry of Array.from(uniqueMap.entries())) {
  //       valueCount++;
  //       if(valueCount != 1){
  //       let nextvalue = entry[1];
  //       if(value == nextvalue){
  //         isUniqueValue = false;
  //       }
  //     }
  // }
  //   }
    // var get_map_values = uniqueMap.values();
    // console.log(uniqueMap);
    // console.log(get_map_values);
    // for(var val of get_map_values)
    //}

    //var getit = uniqueMap[Symbol.iterator]();
    
    // for(var val of uniqueMap.entries()){

    // }
    

  }

}
