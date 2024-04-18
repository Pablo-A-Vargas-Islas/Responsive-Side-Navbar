import { useState } from "react";
import Image from 'next/image';

export default function Login(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aquí puedes realizar la validación de los campos, por ejemplo:
    if (!username || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Aquí puedes enviar los datos de inicio de sesión al servidor para la autenticación
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Si la respuesta es exitosa, redirecciona a otra página
        window.location.href = '/sidebar';
        
      } else {
        // Si la respuesta no es exitosa, muestra un mensaje de error
        setError('Credenciales incorrectas. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Ocurrió un error al intentar iniciar sesión. Por favor, intenta de nuevo más tarde.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-0 pr-[31px] pl-0 box-border gap-[132px] tracking-[normal] text-center text-[80px] text-black font-poppins mq750:gap-[132px_66px] mq450:gap-[132px_33px] mq1125:flex-wrap mq1125:p-5 mq1125:box-border">
      <div className="w-[597px] flex flex-row items-start justify-start relative min-w-[597px] max-w-full mq750:min-w-full mq1125:flex-1">
        <Image
          className="h-[1024px] flex-1 relative max-w-full overflow-hidden object-cover mq1125:flex-1"
          loading="lazy"
          alt=""
          src="/imagen-de-whatsapp-20240401-a-las-1018-1@2x.png"
        />
        <button className="cursor-pointer [border:none] pt-[27px] pb-7 pr-[41.5px] pl-[43px] bg-[transparent] w-[371px] !m-[0] absolute right-[-45px] bottom-[48px] flex flex-row items-start justify-start box-border whitespace-nowrap z-[1]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-31xl bg-white" />
          <div className="flex-1 relative text-[30px] font-semibold font-poppins text-royalblue-200 text-left z-[1]">
            Inicio de sesión
          </div>
        </button>
      </div>
      <div className="h-[1024px] w-[843px] relative bg-white hidden max-w-full" />
      <div className="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[442px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[108px] max-w-full mq750:gap-[54px_108px] mq450:gap-[27px_108px]">
          <div className="self-stretch flex flex-col items-end justify-start gap-[45px] max-w-full mq750:gap-[22px_45px]">
            <Image
              className="w-[100px] h-[100px] relative rounded-31xl overflow-hidden shrink-0 object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/logo.png"
            />
            <div className="self-stretch flex flex-row" style={{ alignItems: 'center', justifyContent: 'center' }}>
              <div className="w-[580px] shadow-[0px_4px_25px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[88px] px-[54px] pb-[138px] box-border relative gap-[61px] max-w-full z-[3] mq750:gap-[30px_61px] mq750:pt-[57px] mq750:px-[27px] mq750:pb-[90px] mq750:box-border mq450:gap-[15px_61px]">
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[10px] bg-white" />
                <h1 className="m-0 self-stretch h-[104px] relative text-inherit leading-[48px] font-bold font-inherit flex items-center shrink-0 z-[1] mq450:text-[24px] mq450:leading-[19px] mq1050:text-[40px] mq1050:leading-[29px]">
                  <span>
                    <p className="[margin-block-start:0] [margin-block-end:35px]">
                      Bienvenido
                    </p>
                    <p className="m-0">de vuelta!</p>
                  </span>
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                  <form className="m-0 flex-1 flex flex-col items-end justify-start gap-[42.8px] max-w-full mq750:gap-[21px_42.8px]"
                        onSubmit={handleSubmit}
                  >
                    <div className="self-stretch h-[188.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[83px] box-border max-w-full">
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[22.6px] px-0 box-border gap-[4px] max-w-full shrink-0 z-[1]">
                        <div className="self-stretch relative text-sm leading-[20px] font-medium font-poppins text-black text-left">
                          Matrícula
                        </div>
                        <div className="self-stretch rounded-md bg-white box-border flex flex-row items-start justify-start py-2 pr-2.5 pl-3 max-w-full border-[1px] border-solid border-gray-200">
                          <input
                            className="w-full [border:none] [outline:none] font-poppins text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-gray-100 text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full p-0"
                            placeholder="Ingresa tu matrícula"
                            type="text"
                            name="username"
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start py-[22.6px] px-0 box-border relative gap-[4px] max-w-full shrink-0 z-[2] mt-[-22.2px]">
                        <div className="self-stretch relative text-sm leading-[20px] font-medium font-roboto text-black text-left">
                          Contraseña
                        </div>
                        <div className="self-stretch rounded-md bg-white box-border flex flex-row items-start justify-start py-2 pr-2.5 pl-3 max-w-full border-[1px] border-solid border-gray-200">
                          <input
                            className="w-full [border:none] [outline:none] font-poppins text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-gray-100 text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full p-0"
                            placeholder="Ingresa tu contraseña"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="icon-container" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                          <Image
                            className="w-[23px] h-[23px] absolute !m-[0] right-[11.6px] bottom-[34px] overflow-hidden shrink-0 z-[3]"
                            loading="lazy"
                            alt=""
                            src="/iconamooneye.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py- pr-[48.8px] pl-[50px] box-border max-w-full mq750:pl-[85px] mq750:pr-6 mq750:box-border">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[12px] max-w-full z-[1] mq750:flex-wrap">
                        <button className="cursor-pointer py-4 px-[150px] bg-royalblue-200 rounded-lg flex flex-row items-start justify-start hover:bg-royalblue-100">
                          <div className="relative text-base leading-[20px] font-medium font-poppins text-white text-left inline-block min-w-[px]">
                            Ingresar
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <footer className="w-[1024px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-[20px] text-black font-poppins">
            <h3 className="m-0 w-[317px] relative text-inherit leading-[28px] font-normal font-inherit flex items-center justify-center z-[3] mq450:text-base mq450:leading-[22px]">
              Copyright © Transportes G@GO
            </h3>
          </footer>
        </div>
      </div>
    </div>
  );
};
