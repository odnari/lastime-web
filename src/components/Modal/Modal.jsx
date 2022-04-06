import ReactDOM from 'react-dom'

export default function Modal({ children, onClose, title = null }) {
  const onClickStopPropagation = (e) => e.stopPropagation()

  return ReactDOM.createPortal(
    <div
      className="z-20 fixed top-0 left-0 h-screen w-full flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.6)' }}
      onClick={onClose}
    >
      <div
        onClick={onClickStopPropagation}
        className="bg-white relative shadow-md rounded-md shadow-black-200 overflow-hidden border border-stone-200"
      >
        <div className="select-none w-full flex justify-between items-center py-3 pl-5 pr-2 bg-stone-50 text-gray-700">
          <span className="font-medium">{title}</span>
          <button
            onClick={onClose}
            className="text-gray-600 ml-2 font-bold text-2xl leading-none rounded-full w-7 text-center pb-1 bg-stone-50 hover:bg-stone-100"
            type="button">×
          </button>
        </div>
        <div className="p-5 bg-white">{children}</div>
      </div>
    </div>, document.getElementById('modalRoot'))
}
