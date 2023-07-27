import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function EnquirySuccess({ isOpen, setIsOpen, message }) {

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => { setIsOpen(false) }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className='flex items-center flex-col gap-4'>
                    <i class="fa-solid fa-circle-check text-4xl text-lightBrown shadow-sm rounded-full"></i>
                    <p>{message}</p>
                  </div>

                  <div className="flex justify-center gap-4 mt-4">
                    <button
                      type="button"
                      className="text-lightBrown border-[1px] border-lightBrown p-2 rounded-md text-base hover:bg-lightBrown hover:text-white transition-colors duration-300"
                      onClick={() => { setIsOpen(false) }}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


export default EnquirySuccess