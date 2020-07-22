
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const FeatureNameEnum = ["Seam", "Slot", "Hole"];
const ControlNameEnum = ["X", "Y", "Z", "Diameter", "Perimeter"];


const generateRowData = () => {
    let data = [];
    const numberRows = getRandomInt(1,15);
    for(let i = 0; i < numberRows; ++i){
        data.push({
            control: `${ControlNameEnum[getRandomInt(0,5)]}`,
            dev: getRandomInt(0,20).toString(),
            devOutTol: getRandomInt(0,20).toString(),
            icon: getRandomInt(0,3)
        });
    }
    return data;
}

const generateFeature = () => {
    let feature = {
        color: getRandomInt(0,3),
        name: `Feature ${FeatureNameEnum[getRandomInt(0, 3)]}`,
        data: generateRowData()
    };
    return feature;
}

const generateFeatureArray = () => {
    let feature = [];
    const numberFeaturesGenerated = getRandomInt(1,10);
    for(let i = 0; i < numberFeaturesGenerated; ++i){
        feature.push(generateFeature());
    }
    return feature;
}
const generatePart = () => {
    let data = {
        title: `Part ${Math.floor(Math.random() * Math.floor(1000))}`,
        featureData: generateFeatureArray(),
    };

    return data;
}

module.exports = {
    generatePart
  };