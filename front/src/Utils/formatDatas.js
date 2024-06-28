const getKindStr = (kind) => {
    switch (kind){
        case 1:
            return "Cardio"
        case 2:
            return "Énergie"
        case 3:
            return "Endurance"
        case 4:
            return "Force"
        case 5:
            return "Vitesse"
        case 6:
            return "Intensité"
        default:
            return ""
    }
}
const getDay = (day) => {
    switch (day){
        case 1:
            return "L"
        case 2:
            return "M"
        case 3:
            return "M"
        case 4:
            return "J"
        case 5:
            return "V"
        case 6:
            return "S"
        case 7:
            return "D"
        default:
            return"DEFAULT"
    }
}

export const formatData = (data, type) => {
    const formatedData = []
    for(let i = data.length - 1; i >= 0; i--){
        let obj = {}
        if(type === "performance"){
            obj = {
                value: data[i].value,
                kind: getKindStr(data[i].kind)
            }                
        }

        if(type === "averageSessions"){
            obj = {
                dayOrigin: data[i].day,
                day: getDay(data[i].day),
                sessionLength: data[i].sessionLength
            }
        }

        if(type === "activities"){
            obj = {
                name: i + 1,
                kg: data[i].kilogram,
                cal: data[i].calories,
                d: data[i].day
            }
        }
        formatedData.push(obj)
    }
    return formatedData
}