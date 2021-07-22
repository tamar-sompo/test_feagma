import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
    arrtable: [{ tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#27D96E"},
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#F1A953" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#27D96E" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#27D96E" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#F1A953" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#27D96E" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#27D96E" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#27D96E" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#27D96E" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#F1A953" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#F1A953" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#27D96E" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#27D96E" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#F1A953" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#F1A953" },
    { tz: "201154322", name: "יואב שרון", Extraordinary_hours: "04:00", Manual_hours: "04:00", hours: "155:00", all_hours: "159:00", options: "" ,color:"#27D96E" }
    ]

}
const table = {
    setArrtable(state, action) {
        state.arrtable = action.payload
    }
}

export default produce((state, action) => createReducer(state, action, table), initialState);
