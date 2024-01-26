import { render, fireEvent, screen, act } from '@testing-library/react-native'
import SignInForm from './SignInForm'
import { Formik } from 'formik'

describe('Form', () => {
  it('calls function provided by onSubmit prop after pressing the submit button', async () => {
    const onSubmit = jest.fn()

    const FormWrapper = () => (
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    )

    render(<FormWrapper />)

    await act(() => {
      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle')
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password')
      fireEvent.press(screen.getByTestId('submitButton'))
    })

    expect(onSubmit).toHaveBeenCalledTimes(1)

    // onSubmit.mock.calls[0][0] contains the first argument of the first call
    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'kalle',
      password: 'password',
    })
  })
})
