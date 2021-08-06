import * as React from 'react';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { Card } from 'baseui/card';
import Veri from './Veri';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import KKUBaslik from './components/KKUBaslik';

const ORNEK_VERI = [
  {
    id: 'v1',
    ilkKutu: 'Nigar AYDIN',
    ikinciKutu: 'blK-hwdVg;;.K&i',
  },
  {
    id: 'v2',
    ilkKutu: 'Mehmet AYDIN',
    ikinciKutu: '++KUkhLXkQhf5s1',
  },
  {
    id: 'v3',
    ilkKutu: 'Tunahan AYDIN',
    ikinciKutu: '-ugPHLyLFxl!Q&G',
  },
  {
    id: 'v4',
    ilkKutu: 'Oğuzhan AYDIN',
    ikinciKutu: '!z&TUasdpdaSi3ld',
  },
  {
    id: 'v5',
    ilkKutu: 'Ahmet Arif AYDIN',
    ikinciKutu: '#%+L#SIv6zp=Mn+',
  },
];

const App = () => {
  const [mailValue, setMailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [ornekVeri, setOrnekVeri] = React.useState(ORNEK_VERI);

  const onChangeEMail = ({ target: { value } }) => {
    setMailValue(value);
  };
  const onChangePassword = ({ target: { value } }) => {
    setPasswordValue(value);
  };

  const kullaniciVeriEkle = (veri) => {
    setOrnekVeri((prevVeri) => {
      return [veri, ...prevVeri];
    });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    const yeniVeri = {
      ilkKutu: mailValue,
      ikinciKutu: passwordValue,
      id: Math.random().toString(),
    };

    kullaniciVeriEkle(yeniVeri);

    setMailValue('');
    setPasswordValue('');
  };

  return (
    <div>
      <KKUBaslik />
      <div
        style={{
          padding: '3%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FlexGrid
          flexGridColumnCount={2}
          flexGridColumnGap="scale800"
          flexGridRowGap="scale800"
        >
          <FlexGridItem>
            <Card
              title="Giriş Yap"
              overrides={{ Root: { style: { width: '33rem' } } }}
            >
              <form onSubmit={onSubmitForm}>
                <FormControl label="E-posta veya Telefon Numarası">
                  <Input
                    id="email-input-id"
                    value={mailValue}
                    onChange={onChangeEMail}
                    type="text"
                    required
                  />
                </FormControl>
                <FormControl label="Şifre">
                  <Input
                    id="password-input-id"
                    value={passwordValue}
                    onChange={onChangePassword}
                    type="password"
                    required
                  />
                </FormControl>
                <Button type="submit">Giriş Yap</Button>
              </form>
            </Card>
          </FlexGridItem>
          <FlexGridItem>
            <Card
              title="Giriş Yapmış Kullanıcılar"
              overrides={{ Root: { style: { width: '33rem' } } }}
            >
              <Veri ornekVeri={ornekVeri} />
            </Card>
          </FlexGridItem>
        </FlexGrid>
      </div>
    </div>
  );
};

export default App;
