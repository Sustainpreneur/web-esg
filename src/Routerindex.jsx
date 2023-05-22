import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MASTER_ROUTER_MODEL } from './models/Router_model'

const Routerindex = () => {

    return (
        <React.Fragment>
            <Routes>
                {MASTER_ROUTER_MODEL.filter(x => x.is_active === true).map((x, i) => {
                    return x.items.length === 0 ? <Route key={x.id} path={x.router_path} element={x.router_component} /> : <>
                        {x.items.map((xx, ii) => {
                            return <Route key={xx.id} path={xx.router_path} element={xx.router_component} />
                        })}
                    </>
                })}
            </Routes>
        </React.Fragment>
    )
}

export default Routerindex
