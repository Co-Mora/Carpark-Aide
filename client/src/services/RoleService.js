import API from '@/services/API'

const fetchAllData = (token, URL) => {
  return API(token).get(`${URL}`);
};

const createData = (token, URL, credentials) => {
  API(token).post(`${URL}`, credentials).then(response => {
    if(response.status === 200) {
      setTimeout(() => {
        swal({
          title: 'Add it successfully',
          icon: 'success'
        })
      }, 200);
      setTimeout(() => {
        window.location.href = `/role/add`
      }, 200)
    } else {
      setTimeout(() => {
        swal({
          title: 'Data Error',
          icon: 'error'
        })
      }, 200)
    }
  });
};

const updateData = (token, URL, value) => {
  return API(token).put(`${URL}/${value}`);
};

const deleteData = (token, URL, value) => {
  return API(token).delete(`${URL}/${value}`);
};


module.exports = {
  fetchAllData,
  createData,
  updateData,
  deleteData
}
