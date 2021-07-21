import React, { useEffect, useState } from 'react';

function FetchApi() {

    const [page, setPage] = useState([]);
    const [num, setNum] = useState(1);

    const nextPage =()=>{
        setNum(num + 1);
    }

    const prevPage =()=>{
        setNum(num - 1);
    }

    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${num}`).then(
            res => res.json()
        ).then(response=>{
            //console.log(response.data);
            setPage(response.data);
        }).catch();
    }, [num])

    return (
        <>
        <div className="mx-5 mt-5">
            <div className="text-center">
            {
                num>1 ? <button type="button" className="btn btn-primary ml-1" onClick={prevPage}><i class="fas fa-arrow-left"></i></button> : null
            }
                
                <button type="button" className="btn btn-primary ml-1" onClick={nextPage}><i class="fas fa-arrow-right"></i></button>
            </div>
            <h5>Page No - {num}</h5>
            <div className="row">
                {
                    page.map((elem)=>{
                        return(
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-3" key={elem.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                <img className="img-fluid" src={elem.avatar} alt="avatar" />
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                                <p>{elem.id}</p>
                                                <h5>{elem.first_name}{' '}{elem.last_name}</h5>
                                                <h5>{elem.email}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                } 
            </div> 
        </div>
        </>
    )
}

export default FetchApi;
