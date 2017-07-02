export function changeSampleData(data){
  return {
    type: 'CHANGE_SAMPLE_DATA',
    sampleData: data
  }
}

export function logIn(){
  return {
    type: 'LOG_IN',
    isLoggedIn: true
  }
}