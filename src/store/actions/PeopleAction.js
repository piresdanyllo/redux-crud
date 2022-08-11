import api from '../../api'

export const getPeople = async (dispatch) => {
    try {
        const {data} = await api.get('/pessoa?pagina=0&tamanhoDasPaginas=20')
        const people = {
            type: 'GET_PEOPLE',
            people: data.content
        }
        dispatch(people)
    } catch (error) {
       console.log(error) 
    }
}

export const createPeople = async (values, dispatch, navigate) => {
    try {
        await api.post('/pessoa', values)
        const people = {
            type: 'CREATE_PEOPLE'            
        }
        dispatch(people)
        navigate('/people')
    } catch (error) {
       console.log(error) 
    }
}

export const navigateToCreatePerson = (dispatch, navigate) => {
    const person = {
        type: 'NAVIGATE_TO_CREATE_PEOPLE',
    }
    dispatch(person)
    navigate(`/people/create`)
}

export const navigateToUpdatePerson = (idPessoa, dispatch, navigate) => {
    const person = {
        type: 'NAVIGATE_TO_UPDATE_PEOPLE',
    }
    dispatch(person)
    navigate(`/people/edit/${idPessoa}`)
}

export const getPerson = async (id, dispatch) => {
    try {
        const {data} = await api.get(`/pessoa/lista-completa?idPessoa=${id}`)
        const person = {
            type: 'UPDATE_PEOPLE',
            person: data && data[0],
        }
        dispatch(person)
    } catch (error) {
        console.log(error)
    }
}

export const updatePerson = async (values, id, navigate) => {
    try {
        await api.put(`/pessoa/${id}`, values)
        navigate('/people')
    } catch (error) {
        console.log(error)
    }
}

export const deletePerson = async(id, dispatch) => {
    try {
        await api.delete(`/pessoa/${id}`)
        getPeople(dispatch)
    } catch (error) {
        
    }
}

