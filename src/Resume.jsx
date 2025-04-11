import React from "react";
import img from "./assets/sigmo.png";

const Resume = () => {
  return (
    <div className="bg-gray-100 font-sans min-h-screen flex justify-center items-center">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-8 my-8">
        <div className="bg-gray-800 text-white p-6 text-center">
          <h1 className="text-4xl font-bold">Нур-Тилек Алиев</h1>
          <p className="text-lg mt-2">Специалист по интернет-технологиям</p>
        </div>

        <div className="flex justify-between mt-6 text-gray-700">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <p>ул. Белмазар 18, Бишкек, Кыргызстан</p>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <p>+996 995 997 344</p>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <p>jesin.tima.2006@gmail.com</p>
          </div>
        </div>

        <div className="flex mt-8">
          <div className="w-1/3 pr-6 border-r">
            <div className="w-32 h-32 rounded-full mb-6">
              <img src={img} alt="" className="rounded-full" />
            </div>
            <h2 className="text-xl font-bold mb-4">Навыки</h2>
            <div className="mb-4">
              <p className="text-gray-700">Презентация</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-gray-600 h-2 rounded"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Сотрудничество</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-gray-600 h-2 rounded"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Презентация</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-gray-600 h-2 rounded"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">HTML, CSS</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-gray-600 h-2 rounded"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">JavaScript</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-gray-600 h-2 rounded"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <h2 className="text-xl font-bold mb-4 mt-6">СПЕЦИАЛИЗАЦИЯ</h2>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Практический опыт работы с ООП</li>
                <li>
                  Знание основ фреймворков по типу React, Laravel, RedBeanPHP
                </li>
                <li>Опыт работы с Web API</li>
              </ul>
            </div>

            <h2 className="text-xl font-bold mb-4 mt-6">ЯЗЫКИ</h2>
            <div className="mb-4">
              <p className="text-gray-700">Русский</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-gray-600 h-2 rounded"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="text-gray-700">Английский</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-gray-600 h-2 rounded"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="w-2/3 pl-6">
            <p className="text-gray-700 mb-6">
              Я начинающий фронтенд-разработчик, стремящийся к профессиональному
              росту и обучению. Хотя у меня еще не так много опыта, я готов
              усердно работать, чтобы развить свои навыки и стать специалистом в
              этой области. Я люблю разбирать и открывать для обучения, так у
              меня есть интерес к проектам, а готов присоединиться к ним и
              учиться на практике.
            </p>

            <h2 className="text-xl font-bold mb-4">ОПЫТ РАБОТЫ</h2>
            <div className="flex items-start mb-4">
              <div className="w-4 h-4 bg-gray-400 rounded-full mr-4 mt-1"></div>
              <div>
                <h3 className="text-lg font-semibold">
                  Акимжанов Ерасыл - СПЕЦИАЛИСТ ПО ИНТЕРНЕТ-ТЕХНОЛОГИЯМ
                </h3>
                <p className="text-gray-600">апр. 2024 - май 2024, Бишкек</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="w-4 h-4 bg-gray-400 rounded-full mr-4 mt-1"></div>
              <div>
                <h3 className="text-lg font-semibold">
                  Улан Джумашев - Интеграция с VoIP-протоколами
                </h3>
                <p className="text-gray-600">
                  середина мая 2024 - июль 2024, Бишкек
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4 mt-6">ОБРАЗОВАНИЕ</h2>
            <div className="flex items-start mb-4">
              <div className="w-4 h-4 bg-gray-400 rounded-full mr-4 mt-1"></div>
              <div>
                <h3 className="text-lg font-semibold">
                  Новопавловская школа им. Ч.Айтматова №1
                </h3>
                <p className="text-gray-600">2024, Бишкек</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="w-4 h-4 bg-gray-400 rounded-full mr-4 mt-1"></div>
              <div>
                <h3 className="text-lg font-semibold">
                  Профессиональный лицей № 98
                </h3>
                <p className="text-gray-600">Студент</p>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4 mt-6">ХОББИ</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>строю хуи в майнкрафте</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
