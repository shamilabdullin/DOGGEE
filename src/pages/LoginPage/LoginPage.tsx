import React from 'react';
import './LoginPage.css';
import { Input } from '../../common/fields'; // укороченные импорты
import { Button } from '../../common/buttons';

export const LoginPage = () => {
  const [formValues, setFormValues] = React.useState({ username: '', password: '' }); // делаем так чтобы не писать usernameValue...
  console.log(formValues);

  return (
    <div className='login_page'>
      <div className='login_page_container'>
        <div>header</div>
        <div className='login_page_form_container'>
          <div className='login_page_input_container'>
            <Input
              isError={true} //  тестирование ошибки
              helperText='oooooou esssss'
              value={formValues.username}
              placeholder='username' // появляется благодаря {...props} в Input.tsx 14
              name='username' // вроде не обязательно
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFormValues({ ...formValues, username: event.target.value })
              } // без : React.ChangeEvent<HTMLInputElement> выведет ошибку
            />
          </div>
          <div className='login_page_input_container'>
            <Input
              value={formValues.password}
              placeholder='password'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFormValues({ ...formValues, password: event.target.value })
              }
            />
          </div>
          <div>
            <Button>Sign in</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
