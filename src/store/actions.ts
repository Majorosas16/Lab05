export const changeBackground  = (payload: any) => { //la actualización de la variable
    return  {
        action: 'CHANGEBACKGROUND',
        payload,
    }
}