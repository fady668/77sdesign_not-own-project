import axios from 'axios';
export default function changeWebTrans(langCode){
    console.log()
    return (dispatch)=>{
        return axios.post("http://192.168.11.24:8015/user/Web_trans",{
            lang: langCode,
        }).then((res) => {

            console.log()
            dispatch({type:"SET_WEB_TRANS",payload:res.data.languages[0].web});
        }).catch((err) => {
            console.log();
        })

    }
}
export const countryList=(payload)=>{
    return{
        payload,
        type: 'COUNTRY_LIST',
    }
}

export const webList=(payload)=>{
    return{
        payload,
        type: 'WEB_LIST',
    }
}


export const isAuth=(payload)=>{
    return{
        payload,
        type: 'IS_AUTH',
    }
}
export const usernamered=(payload)=>{
    return{
        payload,
        type: 'USERNAMERED',
    }
}
export const usertypered=(payload)=>{
    return{
        payload,
        type: 'USERTYPERED',
    }
}
export const usertype=(payload)=>{
    return{
        payload,
        type: 'USER_TYPE',
    }
}
export const usertokenred=(payload)=>{
    return{
        payload,
        type: 'USERTOKENRED',
    }
}
export const userimgred=(payload)=>{
    return{
        payload,
        type: 'USERIMGRED',
    }
}


export const lang=(payload)=>{
    return{
        payload,
        type: 'LANG_UAGE',
    }
}
export const listLang=(payload)=>{
    return{
        payload,
        type: 'LIST_LANG_UAGE',
    }
}

export const valueurl=(payload)=>{
    return{
        payload,
        type: 'VALUE_URL',
    }
}
export const isload=(payload)=>{
    return{
        payload,
        type: 'IS_LOAD',
    }
}
export const  istest=(payload)=>{
    return{
        payload,
        type: 'IS_TEST',
    }
}
export const  mapload=(payload)=>{
    return{
        payload,
        type: 'MAP_LOAD',
    }
}
export const  error_many=(payload)=>{
    return{
        payload,
        type: 'ERROR_MANY',
    }
}
export const  sector_info=(payload)=>{
    return{
        payload,
        type: 'SECTOR_INFO',
    }

}
export const  values_info=(payload)=>{
    return{
        payload,
        type: 'VALUES_INFO',
    }
}

export const  entity_info=(payload)=>{
    return{
        payload,
        type: 'ENTITY_INFO',
    }
}
export const  is_s_admin=(payload)=>{
    return{
        payload,
        type: 'IS_S_ADMIN',
    }
}

export const  course_id=(payload)=>{
    return{
        payload,
        type: 'COURSE_ID',
    }
}

export const  level_id=(payload)=>{
    return{
        payload,
        type: 'LEVEL_ID',
    }
}
export const  cart=(payload)=>{
    return{
        payload,
        type: 'CART',
    }
}

export const  idlist=(payload)=>{
    return{
        payload,
        type: 'IDLIST',
    }
}

export const  testToken=(payload)=>{
    return{
        payload,
        type: 'TESTTOKEN',
    }
}


export const   changeLangList=(data)=> {

    return {
        type: "SET_LANG_LIST",
        payload: data
    }

}
export const  is_tok=(payload)=>{
    return{
        payload,
        type: 'IS_TOK',
    }
}
export const  role_choosen=(payload)=>{
    return{
        payload,
        type: 'ROLE_CHOOSEN',
    }
}


export const  user_info=(payload)=>{
    return{
        payload,
        type: 'USER_INFO',
    }
}

export const  user_detail=(payload)=>{
    return{
        payload,
        type: 'USER_DETAIL',
    }
}

export const  user_designer=(payload)=>{
    return{
        payload,
        type: 'USER_DESIGNER',
    }
}

export const  user_client=(payload)=>{
    return{
        payload,
        type: 'USER_CLIENT',
    }
}
export const  refresh_Account=(payload)=>{
    return{
        payload,
        type: 'REFRESH_ACCOUNT',
    }
}
