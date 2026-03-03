import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FieldError } from '@/components/ui/field';
import { FieldLabel } from '@/components/ui/field';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { checkoutSchema, PAYMENT_METHODS, type CheckoutSchemaFormData } from '@/schemas/checkout';
import { useForm } from '@tanstack/react-form';
import useToast from '@/hooks/general/toast';
import { cn } from '@/lib/utils';

export default function CheckoutPage() {
  const mutation = useToast({
    mutationFn: async () => {
      await new Promise((r) => setTimeout(r, 1500));
    },
    onSuccess: () => {
      form.reset();
    },
  });

  const form = useForm({
    validators: {
      onSubmit: checkoutSchema,
    },
    defaultValues: {
      fullName: '',
      email: '',
      total: 1,
      paymentMethod: PAYMENT_METHODS[0],
    } as CheckoutSchemaFormData,
    onSubmit: async ({ value }) => {
      console.log('Submitting with values:', value);
      await mutation.mutateAsync();
    },
  });

  return (
    <div className="p-10">
      <form
        className={cn('space-y-4', { 'pointer-events-none opacity-50': mutation.isPending })}
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}>
        <form.Field name="fullName">
          {(field) => {
            const isInvalid = field.state.meta.isDirty && !field.state.meta.isValid;
            return (
              <Field aria-invalid={isInvalid} orientation={'responsive'}>
                <FieldLabel htmlFor="fullName">Full name</FieldLabel>
                <Input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        </form.Field>
        <form.Field name="email">
          {(field) => {
            const isInvalid = field.state.meta.isDirty && !field.state.meta.isValid;
            return (
              <Field aria-invalid={isInvalid} orientation={'responsive'}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        </form.Field>
        <form.Field name="total">
          {(field) => {
            const isInvalid = field.state.meta.isDirty && !field.state.meta.isValid;
            return (
              <Field aria-invalid={isInvalid} orientation={'responsive'}>
                <FieldLabel htmlFor="total">Total</FieldLabel>
                <Input
                  id="total"
                  type="number"
                  placeholder="Enter your total"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(+e.target.value)}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        </form.Field>
        <form.Field name="paymentMethod">
          {(field) => {
            const isInvalid = field.state.meta.isDirty && !field.state.meta.isValid;
            return (
              <Field aria-invalid={isInvalid} orientation={'responsive'}>
                <FieldLabel htmlFor="paymentMethod">Payment Method</FieldLabel>
                <Select
                  value={field.state.value}
                  name={field.name}
                  onValueChange={(v) => field.handleChange(v as CheckoutSchemaFormData['paymentMethod'])}>
                  <SelectTrigger id="paymentMethod" className="capitalize">
                    <SelectValue placeholder="Select a payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    {PAYMENT_METHODS.map((p) => (
                      <SelectItem className="capitalize" value={p} key={p}>
                        {p.replace(/-/g, ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        </form.Field>

        <form.Subscribe selector={(state) => state.values.total}>
          {(total) => (
            <div>
              <p>Shipping: {10}</p>
              <p>Total: {total + 10}</p>
            </div>
          )}
        </form.Subscribe>

        <form.Subscribe selector={(state) => [state.isDirty, state.isSubmitting]}>
          {([isDirty, isSubmitting]) => <Button disabled={!isDirty || isSubmitting}>Continue</Button>}
        </form.Subscribe>
      </form>
    </div>
  );
}
