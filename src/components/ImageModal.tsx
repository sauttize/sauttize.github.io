import './styles/Modal.css';

interface ImageModalProps {
    image: string;
    onClose: () => void;
}

import { useRef, useEffect } from 'react';

function ImageModal({ image, onClose }: Readonly<ImageModalProps>) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog && !dialog.open) {
            dialog.showModal();
        }

        const handleCancel = (e: Event) => {
            e.preventDefault();
            onClose();
        };
        if (dialog) {
            dialog.addEventListener('cancel', handleCancel);
        }
        return () => {
            if (dialog) {
                dialog.removeEventListener('cancel', handleCancel);
            }
        };
    }, [onClose]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            className="modal-overlay"
            onClick={handleOverlayClick}>
            <div className="modal-content">
                <img src={image} />
                <button
                    className="modal-close-btn"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    x
                </button>
            </div>
        </dialog>
    );
}

export default ImageModal;