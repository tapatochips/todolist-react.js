import React from 'react'

export default function Modal({ modalName='testModal', children, color='primary', modalTitle='Title', modalBody='...', modalActionText='Do Action', modalAction=()=>{} }) {
    return (
        <>
            <button type="button" className={`btn btn-${color}`} data-bs-toggle="modal" data-bs-target={`#${modalName}`}>
                { children }
            </button>


            <div className="modal fade" id={modalName} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{ modalTitle }</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            { modalBody }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={modalAction} data-bs-dismiss="modal" className={`btn btn-${color}`}>{modalActionText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}