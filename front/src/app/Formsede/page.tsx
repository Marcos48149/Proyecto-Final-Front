//*Este componente importado es un formulario para crear una sede
import FormSede from "@/components/Sede/FormSede";
const rutaFormsede = () => {
  return (
    <main>
      <div className="bg-main flex justify-center items-center min-h-screen p-4 ">
        <FormSede />
      </div>
    </main>
  );
};

export default rutaFormsede;
