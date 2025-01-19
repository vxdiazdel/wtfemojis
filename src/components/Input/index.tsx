import { ChangeEventHandler, ComponentProps, memo, useCallback } from 'react';

type InputProps = Omit<ComponentProps<'input'>, 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
  className: string;
};

const InputComponent = ({
  className,
  value,
  onChange,
  ...props
}: InputProps) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <input
      value={value}
      onChange={handleChange}
      className={className}
      {...props}
    />
  );
};

export const Input = memo(InputComponent);
