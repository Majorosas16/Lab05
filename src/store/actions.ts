export const addProductsList  = (payload: any) => { //la actualización de la variable
    return  {
        action: 'ADDPRODUCT',
        payload,
    }
}

export const screen  = (payload: any) => { 
    return  {
        action: 'DASHBOARD',
        payload,
    }
}