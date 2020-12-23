export function addEmployee(payload) {
  return {
    type: 'ADD_EMPLOYEE',
    payload,
  };
}
export function updateEmployee(payload) {
  return {
    type: 'UPDATE_EMPLOYEE',
    payload,
  };
}

export function removeEmployee(payload) {
  return {
    type: 'REMOVE_EMPLOYEE',
    payload,
  };
}

export function openSideForm(payload) {
  return {
    type: 'OPEN_SIDE_FORM',
    payload,
  };
}

export function setSelectedEmployeeId(payload) {
  return {
    type: 'SET_SELECTED_EMPLOYEE_ID',
    payload,
  };
}
