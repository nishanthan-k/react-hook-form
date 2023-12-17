import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";
import "./youtubeform.css"

var renderCount = 0;

const YoutubeForm = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log(data);
  }

  renderCount++;

  return (
    <div>
      <h2>Render Count : {renderCount / 2}</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username
          <input
            type="text"
            id="username"
            autoFocus
            {...register("username", { required: 'Username is required' })}
          /></label>
        <label htmlFor="email">Email
          <input
            type="text"
            id="email"
            {...register("email")}
          />
        </label>
        <label htmlFor="channel">Channel
          <input
            type="text"
            id="channel"
            {...register("channel")}
          />
        </label>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default YoutubeForm