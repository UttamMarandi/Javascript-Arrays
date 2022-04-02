Skip to content
Search or jump to…
Pulls
Issues
Marketplace
Explore
 
@kirtesh-hm 
SiteRecon
/
siteReconFrontend
Private
Code
Issues
Pull requests
5
Actions
Wiki
Security
Insights
siteReconFrontend/src/helpers/utilities/index.js /
@admin-siterecon
admin-siterecon Merge branch '22xdh0w'
Latest commit 028a873 16 days ago
 History
 9 contributors
@nitish-sharma-plutonic@Harshbhama@admin-siterecon@shadab14meb346@itsmohitt@sarthakepifi@mistervaibhav@daniyaal-mohammad@sakshiagrawal-siterecon
449 lines (407 sloc)  11.1 KB
   
import { _get } from './lodashUtils';
import { getComponentArea } from '../mapUtils/mapInit';
import { target, Targets } from './Targets.ts'

export const getColorByFeature = (featureName,newFColor) => {
  if (featureName === 'Turf') {
    return '#9CCC65';
  }
  else if (featureName === 'Soft Edge') {
    return '#ED9148';
  }
  else if (featureName === 'Hard Edge') {
    return '#988D89';
  } else if (featureName === 'Flower Beds') {
    return '#FFD54F';
  } else if (featureName === 'Shrub Beds') {
    return '#0969F8';
  } else if (featureName === 'Tree') {
    return '#A7FF1E';
  } else if (featureName === 'Sidewalks') {
    return '#F36C3D';
  } else if (featureName === 'Parking Lots') {
    return '#D3843D';
  } else if (featureName === 'Hedge') {
    return '#5E871E';
  } else if (featureName === 'Palm Tree') {
    return '#714437';
  } else if (featureName === 'Building F') {
    return '#BEBDC2';
  } else if (featureName === 'Pavements') {
    return '#643A00';
  } else if (featureName === 'Driveways') {
    return '#141E32';
  } else if (featureName === 'Parking Spaces') {
    return '#FEF200';
  } else if (featureName === 'Parking Drive Lanes') {
    return '#41495A';
  } else if (featureName === 'Roadways') {
    return '#4F4540';
  } else if (featureName === 'Docks') {
    return '#E09977';
  } else if (featureName === 'Parcel') {
    return '#ffd700';
  }
  else {
    let returnColor = ''
    if(newFColor.length !== 0){
      newFColor.forEach((val, index) => {
        for(var key in val){
          if(key === featureName){
            returnColor = val[key]
          }
        }
      })
    }else{
      returnColor = '#7DD5F4'
    }
    return returnColor
  }
};

export const getHeadingFromFeature = (feature, featureType) => {
  if (
    featureType[feature] === 'Line'
  ) {
    return 'ft';
  } else {
    return 'sq ft';
  }
};


export const debounce = (func, delay) => {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

export const getMonth = (month) => {
  switch (month) {
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Aug';
    case 9:
      return 'Sep';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
    default:
      break;
  }
};

export const setDate = (date) => {
  return (
    date + (date === 1 ? 'st' : date === 2 ? 'nd' : date === 3 ? 'rd' : 'th')
  );
};

export const getHour = (hour, minute) => {
  const HOUR = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const MINUTE = minute < 10 ? '0' + minute : minute;
  const ampm = hour > 12 ? 'PM' : 'AM';
  const time = `${HOUR}:${MINUTE} ${ampm}`;
  return time;
};

export const getDate = (d, type) => {
  const date = d.split('T')[0];
  const DATE = date.split('-')[2];
  const MONTH = getMonth(+date.split('-')[1]);
  const YEAR = date.split('-')[0];
  const TIME = d.split('T')[1].split(':');
  const ModifiedTIME = getHour(+TIME[0], +TIME[1]);

  if (type === 1) {
    const newDate = `${DATE} ${MONTH} ${YEAR} ${ModifiedTIME} (EST)`;
    return newDate;
  } else if (type === 2) {
    const newDate = `${DATE} ${MONTH} ${YEAR}`;
    return newDate;
  } else {
    const newDate = `${YEAR}-${MONTH}-${DATE}`;
    return newDate;
  }
};

export const rolesArray = [
  {
    id: 4,
    cd: 'viewer',
    na: 'Viewer',
    desc: 'Can Only view the properties ordered by others.',
  },
  {
    id: 3,
    cd: 'editor',
    na: 'Editor',
    desc: 'Can Edit layers and measurements in already ordered properties.',
  },
  {
    id: 2,
    cd: 'creator',
    na: 'Creator',
    desc: 'Can Order new properties using the allocated credits.',
  },
  {
    id: 1,
    cd: 'admin',
    na: 'Admin',
    desc: 'Can change Member roles and manage their Credits',
  },
];
export const getResult = (value) => {
  var check = false
  value.map((val, index) => {
    if(val["Turf"] === true || val["Flower Beds"] === true||val["Shrub Beds"] === true|| val["Tree"] === true||val["Sidewalks"] === true ||val["Parking Lots"] === true||val["Hedge"] === true||val["Palm Tree"] === true||val["Building F"] === true||val["Pavements"] === true||val["Driveways"] === true||val["Parking Spaces"] === true||val["Parking Drive Lanes"] === true||val["Roadways"] === true||val["Docks"] === true||val["Parcel"] === true){
      check = true
    }
  })
  if(check === true){
    return true
  }else{
    return false
  }

}

export const getRole = (role) => {
  if (!role) {
    return;
  }
  const d = rolesArray.filter((item) => item.id === role);
  return d[0].na;
};

export const arrayOfBulkOrderHeaders = [
  'Address',
  'City',
  'State',
  'Pin Code',
  'Industry',
  'Property Notes',
  'Measurements',
  'Customer Id',
  'Customer Name',
  'Error',
];

export const bulkOrderJSONtoCSV = (bulkOrdersJSON) => {
  const arrayOfIndividualOrderDataInCorrectOrder = bulkOrdersJSON.map(
    (individualBulkOrder) => {
      const {
        address,
        city,
        customer_id,
        customer_name,
        features,
        industry,
        pincode,
        property_notes,
        state,
        error,
      } = individualBulkOrder;
      return [
        address,
        city,
        state,
        pincode,
        industry,
        property_notes,
        features,
        customer_id,
        customer_name,
        error,
      ];
    }
  );
  return [arrayOfBulkOrderHeaders, ...arrayOfIndividualOrderDataInCorrectOrder];
};

export const endsWithAny = (string, suffixes) => {
  for (const suffix of suffixes) {
    if (string.endsWith(suffix)) return true;
  }
  return false;
};
export const supportedBulkOrderFileTypes = ['.xlsx', '.csv'];
export const isBulkOrderSupportedFileType = (fileName) => {
  return endsWithAny(fileName, supportedBulkOrderFileTypes);
};

export const handleNewFeature = (features) => {
  let arr = ['#00FFFF', '#FF6C90', '#0000FF', '#FF00FF','#808080','#000075','#818101','#800000','#000080','#00800D','#800080','#FF0000','#C0C0C0','#008080','#EBCD04']
  let newFeature = []
  for(var key in features){
    if(key !== 'Turf' && key !== 'Soft Edge' && key !== 'Hard Edge' && key !== 'Flower Beds' && key !== 'Shrub Beds' && key !== 'Tree' && key !== 'Sidewalks' && key !== 'Parking Lots' && key !== 'Hedge' && key !== 'Palm Tree' && key !== 'Building F' && key !== 'Pavements' && key !== 'Driveways' && key !== 'Parking Spaces' && key !== 'Parking Drive Lanes' && key !== 'Roadways' && key !== 'Docks' && key !== 'Parcel'){
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex];
      var obj = {};
      obj[key] = item;
      newFeature.push(obj)
    }
  }
  return newFeature;

}
export const getReducedCost = (value, nearMapDates) => {
  if(nearMapDates.surveys !== undefined){
    return (Math.ceil((Math.round((Number(value) + Number.EPSILON) * 100) / 100) / 10) * 3)
  }else{
    return 0;
  }
}

export const getViewInfo = (cur, reduxView) => {
  if(Object.keys(cur).length !== 0){
    return {viewId: cur['viewId'], isBase: false}
  }else{
    for (let i=0; i<reduxView.length; i++){
      if (reduxView[i].isBaseView){
        return {viewId:reduxView[i].viewId,isBase: true}
      }else {
        return {viewId:reduxView[i].viewId,isBase: false}
      }
    }
  }
}

export const truncateString = (longString, size) => {
  if (longString && longString.length > size) {
    return longString.substring(0, size) + "...";
  }
  return longString
}

export const onlyAllowNumber=(value)=>{
  return /^\d*\.?\d*$/.test(value);
}


export const getShareView = (selectedView, reduxView) => {
  return selectedView;
};

export const CalculateTotalArea=(componentsObj)=>{
  let totalVal=0
  let componentsKey = Object.keys(componentsObj)
  componentsKey.forEach((key)=>{
    let component = componentsObj[key]
    // const { attributes, geoJson} = component;
    const {geometry,properties}=component
    totalVal +=getComponentArea(_get(geometry,'type'),properties)
    // for (let i = 0; i < attributes.length; i++) {
    //   const { attributeId, layerAttributeId,decimal } = attributes[i];
    //   if (attributeId === AREAID || attributeId === PERIMETERID) {
    //     totalVal +=decimal
    //   }
    // }
  })
  return totalVal
}


export const newColorFind = function(){
  const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

  let randomColorString = '#';
  for (let x = 0; x < 6; x++){

    let index = Math.floor(Math.random() * 16)
    let value = arrayOfColorFunctions[index]

    randomColorString += value
  }
  return randomColorString
}

export const changePath=(path)=>{
  window.history.replaceState(
    null,
    '',
    `${path?.location?.pathname}`,
  );
}

export const findLayerById = (layerId, mapRef) =>{
  let layers = mapRef.getLayers();
  let result;
  layers.forEach(function(layer) {
    if (layer.get('id') === layerId || layer.get('id') === Number(layerId)) {
      result = layer;
    }
  });
  return result;
}

export const findLayerStyleFromComponent = (layerId, layerList) =>{
  let targetLayerStyle;
  layerList && layerList.length && layerList.forEach((item) => {
    if (item.layerId === layerId) {
      targetLayerStyle = item.style;
    }
  });
  return targetLayerStyle;
}

export const radiansToDegrees = (radians) =>{
  let pi = Math.PI;
  return radians * (180/pi);
}


export const stringModify = (string, obj) => {
  let s = string;
  for (let prop in obj) {
    let value = `"${obj[prop]}"`;
    const regex = `${prop}=\\"[#0-9a-zA-Z]+\\"`
    s = s?.replaceAll(new RegExp(regex,'g'), `${prop}=${value}`);
  }
  return s;
}

export const isObject = (obj)=>
{
  return obj != null && obj.constructor.name === "Object"
}

export const trackEvents = (name, payload, target = Targets.ALL) => {
  switch (target) {
      case Targets.SEGMENT:
          window.analytics.track(name, payload);
          console.log('segment')
          break;
      case Targets.USERIQ:
          console.log(name, payload);
          console.log('useriq')
          break;
      case Targets.ALL:
          window.analytics.track(name, payload);
          console.log(name, payload);
          break;
  }
};


export const getNameWithComponentId=(selectedId=[], data=[])=>{
  let selectedCompId=[]
  selectedId.forEach((selectedId)=>{
    data.map((item)=>{
      if (selectedId === item.id){
        selectedCompId.push(item?.properties?.componentIndexing)
      }
    })
  })
  return selectedCompId
}

export const findLayerNameWithId=(layerId, layerData)=>{
  let result;
  layerData && layerData.length && layerData.forEach((item) => {
    if (item.layerId === Number(layerId)) {
      result = item;
    }
  });
  return result;
}


export const findLayerStatus = (mapLayer = []) => {
  let layerStatus = [];
  mapLayer.forEach((layer) => {
    layerStatus.push({
      name: layer.name,
      active: layer?.isSelected,
    });
  });
  return layerStatus;
};

export const isJSON=(str)=> {
  try {
    return (JSON.parse(str) && !!str);
  } catch (e) {
    return false;
  }
}
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete