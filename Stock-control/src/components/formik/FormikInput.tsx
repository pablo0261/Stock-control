import { useField } from 'formik'
import style from './FormikInput.module.sass'

interface FormikInputProps {
    name: string,
    label: string,
    placeholder?: string,
    securetextentry?: boolean
}

function FormikInput({ name, ...props }: FormikInputProps) {

    const [field, meta, helpers] = useField(name)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        helpers.setValue(value)
    };

    return (
        <div className={style.wrapper}>
            <label className={style.label}>{props.label}:</label> 
            <input
                type={props.securetextentry ? 'password' :'text'}
                value={field.value || ''}
                onChange={handleChange}
                {...props}
                className={style.input}
            />
            {meta.error &&
                <p className={style.error}>{meta.error}</p>
            }
            {!meta.error && typeof field.value === 'string' && field.value.length > 0 && 
                <p className={style.valid}>Dato Valido</p>
            }
        </div>
    )
}

export default FormikInput