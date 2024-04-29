import { Controller, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className="flex-col justify-center gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-center gap-5">
        <div className="form-control w-full">
          <label className="label font-bold">Name*</label>
          <input
            className="border h-10 rounded-md w-full"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
        </div>
        <div className="form-control w-full ">
          <label className="label font-bold">Email*</label>
          <input
            className="border h-10 rounded-md w-full"
            {...register("mail", { required: "Email Address is required" })}
          />
        </div>
      </div>

      <div className="form-control w-full">
        <label className="label font-bold">Email*</label>
        <input
          className="border h-10 rounded-md"
          {...register("mail", { required: "Email Address is required" })}
        />
      </div>
      <div className="form-control w-full">
        <label className="label font-bold" htmlFor="textInput">
          Message
        </label>
        <Controller
          name="textInput"
          control={control}
          defaultValue=""
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <input
              className="border h-32 rounded-md w-full"
              type="text"
              id="textInput"
              {...field}
            />
          )}
        />
      </div>
      <button
        type="submit"
        className="my-5 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Send message
      </button>
    </form>
  );
};

export default Form;
