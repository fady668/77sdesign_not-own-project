// import {usernamered, usertokenred, usertype} from "./action.jsx";

const INITIAL_VALUE={
    countrylist:{},
    usernamered:"",
    role_choosen:"admin",
    userimgred:"",
    usertypered:"",
    usertype:"",
    usertokenred:"none",
    isauth:{},
    lang: "en",
    valueurl:"https://api.value-platform.com",
    isload: false,
    istest: false,
    mapload: false,
    error_many:false,
    sector_info:{},
    values_info:{},
    entity_info : {},
    is_s_admin:false,
    listlang:[],
    course_id:'',
    level_id:'',
    cart:[],
    idlist:[],
    is_tok:false,
    langList: [],
    user_info:{},
    refresh_Account:'0',
    user_designer:   {
        "id": 44,
        "user": {
            "id": 62,
            "email": "",
            "username": "",
            "user_type": "designer",
            "is_verified": false,
            "date_joined": "2024-01-11T20:08:42.562738Z",
            "profile_completed": true
        },
        "sample_designs": [],
        "firstname": "",
        "lastname": "",
        "country": "",
        "city": "",
        "timezone": "",
        "address": "",
        "state": "",
        "zip_code": "",
        "phone": "",
        "languages": "",
        "bio": "",
        "avatar": null,
        "id_card": null,
        "gender": "",
        "birth_date": "2024-01-11",
        "available": true,
        "notify": true,
        "email_comments_messages": false,
        "email_remind_deadlines": false,
        "email_winner": false,
        "level": "Entry",
        "rating": "0.0"
    },
    user_client:{
        "id": 1,
        "user": {
            "id": 10,
            "email": "romanytadrosmilad@gmail.comqq",
            "username": "romanytadrosmilad9",
            "user_type": "client",
            "is_verified": false,
            "date_joined": "2024-01-05T13:54:41.911684Z",
            "profile_completed": true
        },
        "firstname": "",
        "lastname": "",
        "country": "",
        "city": "",
        "timezone": "",
        "address": "",
        "state": "",
        "zip_code": "",
        "phone": "",
        "languages": "",
        "bio": "",
        "avatar": null,
        "id_card": null,
        "rating": 0
    }


}
export default function countryListReducer( state=INITIAL_VALUE,action){
    switch(action.type){
        case 'COUNTRY_LIST':
            return {
                ...state,
                countrylist:action.payload
            }

        case 'WEB_LIST':
            return {
                ...state,
                weblist:action.payload
            }

        case 'IS_AUTH':
            return {
                ...state,
                isauth:action.payload,
            }

        case 'LANG_UAGE':
            return {
                ...state,
                lang:action.payload,
            }

        case 'LIST_LANG_UAGE':
            return {
                ...state,
                listlang:action.payload,
            }
        case 'VALUE_URL':
            return {
                ...state,
                valueurl:action.payload,
            }
        case 'IS_TEST':
            return {
                ...state,
                istest:action.payload,
            }
        case 'IS_LOAD':
            return {
                ...state,
                isload:action.payload,
            }
        case 'MAP_LOAD':
            return {
                ...state,
                mapload:action.payload,
            }
        case 'ERROR_MANY':
            return {
                ...state,
                error_many:action.payload,
            }
        case 'SECTOR_INFO':
            return {
                ...state,
                sector_info:action.payload,
            }

        case 'VALUES_INFO':
            return {
                ...state,
                values_info:action.payload,
            }

        case 'ENTITY_INFO':
            return {
                ...state,
                entity_info:action.payload,
            }

        case 'IS_S_ADMIN':
            return {
                ...state,
                is_s_admin:action.payload,
            }
        case 'COURSE_ID':
            return {
                ...state,
                course_id:action.payload,
            }
        case 'LEVEL_ID':
            return {
                ...state,
                level_id:action.payload,
            }

        case 'CART':
            return {
                ...state,
                cart:action.payload,
            }

        case 'TESTtOKEN':
            return {
                ...state,
                testToken:action.payload,
            }




        case 'SET_LANG_LIST':
            return { ...state,
                langList: action.payload
            }
        case "SET_WEB_TRANS":
            return {...state,
                webTrans: action.payload
            }
        case 'USERTOKENRED':
            return {
                ...state,
                usertokenred:action.payload
            }

        case 'USERNAMERED':
            return {
                ...state,
                usernamered:action.payload
            }
        case 'USERTYPERED':
            return {
                ...state,
                usertypered:action.payload
            }

        case 'IS_TOK':
            return {
                ...state,
                is_tok:action.payload
            }
        case 'USERIMGRED':
            return {
                ...state,
                userimgred:action.payload
            }
        case 'ROLE_CHOOSEN':
            return {
                ...state,
                role_choosen:action.payload
            }
        case 'USER_INFO':
            return {
                ...state,
                user_info:action.payload
            }

        case 'USER_DETAIL':
            return {
                ...state,
                user_detail:action.payload
            }
        case 'USER_DESIGNER':
            return {
                ...state,
                user_designer:action.payload
            }
        case 'USER_CLIENT':
            return {
                ...state,
                user_client:action.payload
            }
        case 'REFRESH_ACCOUNT':
            return {
                ...state,
                refresh_Account:action.payload
            }
        default:
            return state;
    }
}
