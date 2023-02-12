export const ControlCash = ({
  payload,
  handleChangePayload,
  handleAddCash,
  handleGetCash,
}) => {
  return (
    <div className="flex flex-col">
      <input
        className="w-80 px-4 py-2 border-purple-400 border rounded-md mb-4"
        type="text"
        value={payload}
        placeholder="Введите сумму"
        onChange={handleChangePayload}
      />
      <button
        className="w-80 h-12 px-10 py-2 bg-violet-400 rounded-3xl text-white mb-4"
        onClick={handleAddCash}
      >
        Пополнить счет
      </button>
      <button
        className="w-80 h-12 px-10 py-2 border-purple-400 rounded-3xl border font-bold text-purple-400"
        onClick={handleGetCash}
      >
        Снять деньги со счета
      </button>
    </div>
  );
};
