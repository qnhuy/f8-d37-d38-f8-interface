import '../../components/Modal/Modal.module.scss'
import styles from './ModalDemo.module.scss'
import Modal from '../../components/Modal'

import React, { useRef } from 'react'

const ModalDemo = function () {
    const [modal1IsOpen, setModal1IsOpen] = React.useState(false)
    const [modal2IsOpen, setModal2IsOpen] = React.useState(false)
    const [modal3IsOpen, setModal3IsOpen] = React.useState(false)
    const [modal4IsOpen, setModal4IsOpen] = React.useState(false)
    const [modal5IsOpen, setModal5IsOpen] = React.useState(false)
    const [modal6IsOpen, setModal6IsOpen] = React.useState(false)
    const [modal7IsOpen, setModal7IsOpen] = React.useState(false)
    const modalRef = useRef(null)

    return (
        <div className={styles.modalDemoContainer}>
            <div className={styles.buttons}>
                <div>
                    <h1>1. Basic modal:</h1>
                    <button
                        className={styles.openModalBtn}
                        onClick={() => setModal1IsOpen(true)}
                    >
                        Open Modal
                    </button>
                </div>

                <div>
                    <h1>2. Modal with animation:</h1>
                    <button
                        className={styles.openModalBtn}
                        onClick={() => setModal2IsOpen(true)}
                    >
                        Open Modal
                    </button>
                </div>

                <div>
                    <h1>3. Modal doesn't close when click to the overlay:</h1>
                    <button
                        className={styles.openModalBtn}
                        onClick={() => setModal3IsOpen(true)}
                    >
                        Open Modal
                    </button>
                </div>

                <div>
                    <h1>4. Modal doesn't close when press Esc:</h1>
                    <button
                        className={styles.openModalBtn}
                        onClick={() => setModal4IsOpen(true)}
                    >
                        Open Modal
                    </button>
                </div>

                <div>
                    <h1>5. Modal custom with custom class name:</h1>
                    <button
                        className={styles.openModalBtn}
                        onClick={() => setModal5IsOpen(true)}
                    >
                        Open Modal
                    </button>
                </div>

                <div>
                    <h1>6. Modal with callback:</h1>
                    <button
                        className={styles.openModalBtn}
                        onClick={() => setModal6IsOpen(true)}
                    >
                        Open Modal
                    </button>
                </div>

                <div>
                    <h1>7. Lock web scroll when modal is opend:</h1>
                    <button
                        className={styles.openModalBtn}
                        onClick={() => setModal7IsOpen(true)}
                    >
                        Open Modal
                    </button>
                </div>

                <div>
                    <h1>8. Modal with useRef:</h1>
                    <button
                        className={styles.openModalBtn}
                        onClick={() => modalRef.current.open()}
                    >
                        Open Modal
                    </button>
                </div>
            </div>

            {modal1IsOpen &&
                <Modal
                    isOpen={modal1IsOpen}
                    onRequestClose={() => setModal1IsOpen(false)}
                >
                    <p>Basic modal is open</p>
                </Modal>
            }

            {modal2IsOpen &&
                <Modal
                    isOpen={modal2IsOpen}
                    onRequestClose={() => setModal2IsOpen(false)}
                    closeTimeoutMS={300}
                    overlayOpenClass={styles.fadeIn}
                    overlayCloseClass={styles.fadeOut}
                    bodyOpenClass={styles.growth}
                    bodyCloseClass={styles.shrink}
                >
                    Modal actions with animation
                </Modal>
            }

            {modal3IsOpen &&
                <Modal
                    isOpen={modal3IsOpen}
                    onRequestClose={() => setModal3IsOpen(false)}
                    shouldCloseOnOverlayClick={false}
                >
                    Can't close when click on the overlay
                </Modal>
            }

            {modal4IsOpen &&
                <Modal
                    isOpen={modal4IsOpen}
                    onRequestClose={() => setModal4IsOpen(false)}
                    shouldCloseOnEsc={false}
                >
                    Can't close when press Esc
                </Modal>
            }

            {modal5IsOpen &&
                <Modal
                    isOpen={modal5IsOpen}
                    onRequestClose={() => setModal5IsOpen(false)}
                    overlayClassName={styles.overlayCustom}
                    bodyClassName={styles.bodyCustom}
                >
                    Custom modal
                </Modal>
            }

            {modal6IsOpen &&
                <Modal
                    isOpen={modal6IsOpen}
                    onRequestClose={() => setModal6IsOpen(false)}
                    onAfterOpen={() => window.alert('Opening the modal')}
                    onAfterClose={() => window.alert('Closing the modal')}
                >
                    Modal with callback
                </Modal>
            }

            {modal7IsOpen &&
                <Modal
                    isOpen={modal7IsOpen}
                    onRequestClose={() => setModal7IsOpen(false)}
                    webBodyOpenClass={styles.webBody}
                    webHtmlOpenClass={styles.webBody}
                >
                    Preventing web scroll
                </Modal>
            }

            <Modal
                ref={modalRef}
                isOpen={false}
                onRequestClose={() => modalRef.current.close()}
            >
                Modal with useRef
            </Modal>

        </div>
    )
}

export default ModalDemo