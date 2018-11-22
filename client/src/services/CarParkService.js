import API from '@/services/API'

export default {
    fetchAllData(token, URL) {
        return API(token).get(`${URL}`);
    },
    createData(token, URL, credentials) {
        API(token).post(`${URL}`, credentials).then(response => {
                if(response.status === 200) {
                setTimeout(() => {
                    swal({
                        title: 'Add it successfully',
                        icon: 'success'
                    })
                }, 200)
                setTimeout(() => {
                    window.location.href = `/`
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
      
       
    },
    updateData(token, URL, value) {
        return API(token).put(`${URL}/${value}`);
    }

}