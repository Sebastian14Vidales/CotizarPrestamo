function Button({operador, evento}) {
  return (
    <button
      type="button"
      className="h-10 w-10 flex items-center justify-center text-xl bg-indigo-600 text-white rounded-full font-bold hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-700"
      onClick={evento}
    >
    {operador}
    </button>
  );
}

export default Button;
