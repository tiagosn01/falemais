/* eslint-disable radix */
import React, { useState } from 'react';

import { Container } from './styles';

function Dashboard() {
  const [origem, setOrigem] = useState(0);
  const [destino, setDestino] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [plano, setPlano] = useState(0);
  const [comPlano, setComPlano] = useState(0);
  const [semPlano, setSemPlano] = useState(0);
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (origem === 0 || tempo === 0 || destino === 0) {
      alert('Preencha o formulário para calcular.');
    }

    if (plano === 0) {
      alert('Selecione o plano.');
    }

    if (plano === 30) {
      if ((origem === 11 && destino === 16) || (origem === 18 && destino === 11)) {
        const time = tempo - 30;
        console.log(tempo);
        if (time > 0) {
          const tarifa = 1.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }

        setSemPlano(1.9 * tempo);
      }

      if (origem === 16 && destino === 11) {
        const time = tempo - 30;

        if (time > 0) {
          const tarifa = 2.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(2.9 * tempo);
      }

      if (origem === 11 && destino === 17) {
        const time = tempo - 30;

        if (time > 0) {
          const tarifa = 1.7 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(1.7 * tempo);
      }

      if (origem === 17 && destino === 11) {
        const time = tempo - 30;

        if (time > 0) {
          const tarifa = 2.7 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(2.7 * tempo);
      }

      if (origem === 11 && destino === 18) {
        const time = tempo - 30;

        if (time > 0) {
          const tarifa = 0.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(0.9 * tempo);
      }

      if (origem === 18 && destino === 11) {
        const time = tempo - 30;

        if (time > 0) {
          const tarifa = 1.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(1.9 * tempo);
      }
    }

    if (plano === 60) {
      if ((origem === 11 && destino === 16) || (origem === 18 && destino === 11)) {
        const time = tempo - 60;

        if (time > 0) {
          const tarifa = 1.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(1.9 * tempo);
      }

      if (origem === 16 && destino === 11) {
        const time = tempo - 60;

        if (time > 0) {
          const tarifa = 2.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(2.9 * tempo);
      }

      if (origem === 11 && destino === 17) {
        const time = tempo - 60;

        if (time > 0) {
          const tarifa = 1.7 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(1.7 * tempo);
      }

      if (origem === 17 && destino === 11) {
        const time = tempo - 60;

        if (time > 0) {
          const tarifa = 2.7 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(2.7 * tempo);
      }

      if (origem === 11 && destino === 18) {
        const time = tempo - 60;

        if (time > 0) {
          const tarifa = 0.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(0.9 * tempo);
      }

      if (origem === 18 && destino === 11) {
        const time = tempo - 60;

        if (time > 0) {
          const tarifa = 1.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(1.9 * tempo);
      }
    }

    if (plano === 120) {
      if ((origem === 11 && destino === 16) || (origem === 18 && destino === 11)) {
        const time = tempo - 120;

        if (time > 0) {
          const tarifa = 1.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(1.9 * tempo);
      }

      if (origem === 16 && destino === 11) {
        const time = tempo - 120;

        if (time > 0) {
          const tarifa = 2.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(2.9 * tempo);
      }

      if (origem === 11 && destino === 17) {
        const time = tempo - 120;

        if (time > 0) {
          const tarifa = 1.7 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(1.7 * tempo);
      }

      if (origem === 17 && destino === 11) {
        const time = tempo - 120;

        if (time > 0) {
          const tarifa = 2.7 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(2.7 * tempo);
      }

      if (origem === 11 && destino === 18) {
        const time = tempo - 120;

        if (time > 0) {
          const tarifa = 0.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }
        setSemPlano(0.9 * tempo);
      }

      if (origem === 18 && destino === 11) {
        const time = tempo - 120;

        if (time > 0) {
          const tarifa = 1.9 * time;
          const calculo = tarifa * 0.1 + tarifa;

          setComPlano(calculo);
        }

        setSemPlano(1.9 * tempo);
      }
    }
    setResult(result + 1);
  };

  return (
    <Container>

      <form onSubmit={handleSubmit}>

        <h1>Consulte o valor das chamadas</h1>

        <h2>Selecione um plano:</h2>
        <div className="planos">
          <button className="plano" type="button" onClick={() => setPlano(30)}>
            FaleMais 30
          </button>
          <button className="plano" type="button" onClick={() => setPlano(60)}>
            FaleMais 60
          </button>
          <button className="plano" type="button" onClick={() => setPlano(120)}>
            FaleMais 120
          </button>
        </div>

        <h2>
          {plano ? (`Plano selecionado:${plano}`) : null}

        </h2>

        <input name="origem" placeholder="Código DDD de Origem" onChange={(e) => setOrigem(Number(e.target.value))} />
        <input name="destino" placeholder="Código DDD de Destino" onChange={(e) => setDestino(Number(e.target.value))} />
        <input name="tempo" placeholder="Tempo da ligação" onChange={(e) => setTempo(Number(e.target.value))} />

        <button type="submit">Consultar</button>
      </form>

      <div>
        {result ? (
          <div>
            <h1>
              {`Com o plano selecionado você fala: ${tempo} minutos, e paga: R$ ${comPlano}.`}
            </h1>
            <h2>
              {`Sem o plano você paga: R$ ${semPlano}`}
            </h2>
          </div>
        ) : null}
      </div>
    </Container>
  );
}

export default Dashboard;
