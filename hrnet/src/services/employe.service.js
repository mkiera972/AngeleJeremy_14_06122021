
/**
 * @EmployeService
 * @classdesc API AUTH
 * GET DATA USER
 * UPDATE PROFIL USER
 * @return DATA USER / DATA USER UPDATE
 */
class EmployeService {

  /**
   * @addEmploye
   * ADD EMPLOYE
   * @returns DATA EMPLOYE
   */
  addEmploye(state, dataForm) {
    console.log('dataForm',dataForm)
    console.log('state',state)

    let employes = state.employes.filter((employe) => {
      if(employe.firstname.toLowerCase().indexOf(dataForm.firstname.toLowerCase()) !== -1 
      && employe.lastname.toLowerCase().indexOf(dataForm.lastname.toLowerCase()) !== -1){
          return true;
      }else{
        return false;
      }         
    });
    console.log("employes tmp",employes)
    if(employes.length > 0){
      return Promise.reject(new Error('Le salarié existe déjà.'));
    }else{
      return Promise.resolve(dataForm);
    }

  }

}

export default new EmployeService();