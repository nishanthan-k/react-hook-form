import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./youtubeform.css";

const YoutubeForm = () => {
	const form = useForm();
	const { register, control, handleSubmit, formState } = form;
	const { errors } = formState;

	const onSubmit = (data) => {
		console.log(data);
	};

	// console.log(errors);

	return (
		<div className="container">
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className="form-field">
					<div className="form-input">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							autoFocus
							{...register("username", { required: "Username is required" })}
						/>
					</div>
					<p className="error">{errors.username?.message}</p>
				</div>
				<div className="form-field">
					<div className="form-input">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							{...register("email", {
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: "Enter valid email id",
								},
							})}
						/>
					</div>
					<p className="error">{errors.email?.message}</p>
				</div>
				<div className="form-field">
					<div className="form-input">
						<label htmlFor="channel">Channel</label>
						<input
							type="text"
							id="channel"
							{...register("channel", { required: "Channel name is required" })}
						/>
					</div>
					<p className="error">{errors.channel?.message}</p>
				</div>

				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};

export default YoutubeForm;
