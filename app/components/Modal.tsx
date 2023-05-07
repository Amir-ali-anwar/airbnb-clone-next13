"use client";
import React from "react";
// import Button from './Button'
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  body,
  footer,
  secondaryLabel,
  secondaryAction,
  disabled,
  actionLabel,
  onSubmit,
  onClose,
}) => {
  const [showModal, SetShowModal] = React.useState(isOpen);
  React.useEffect(() => {
    SetShowModal(isOpen);
  }, [isOpen]);
  const closeHanlder = () => {
    if (disabled) return;
    SetShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  const submitHandler = () => {
    if (disabled) return;
    onSubmit();
  };
  if (!isOpen) return null;
  const secondaryActionHanlder = () => {
    if (disabled || !secondaryAction) {
      return;
    }
  };
  return (
    <>
      <div
        className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none 
                focus:outline-none
                bg-neutral-800/70"
      >
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full  lg:h-auto md:h-auto ">
          {/*content*/}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
              {/*header*/}
              <div
                className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                  onClick={closeHanlder}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              <div className="relative p-6 flex-auto">{body}</div>
                {/*footer*/}
                <div className="flex flex-col gap-2 p-6">
                   <div className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  ">    
                    {/* <Button /> */}

                   </div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
