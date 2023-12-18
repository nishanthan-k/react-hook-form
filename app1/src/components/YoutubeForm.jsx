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
							{...register("username", {
								required: "Username is required",
								validate: (fieldValue) => {
									return (
										/[`'";:,.<>/?[]{}()!@#$%^&*-_=+`]/.test(fieldValue) &&
										"Don't include any special characters"
									);
								},
							})}
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
								required: "Email is required",
								validate: {
									noOtherDomain: (fieldValue) => {
										return (
											/^[A-Z0-9.]+@youtube\.[A-Z]{2}/i.test(fieldValue) ||
											"This domain is not supported"
										);
									},
									onlyIndianServer: (fieldValue) => {
										return (
											/^[A-Z0-9.]+@youtube\.in/i.test(fieldValue) ||
											"This server is not supported"
										);
									},
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
							{...register("channel", {
								required: "Channel name is required",
								validate: (fieldValue) => {
									return (
										/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(fieldValue) &&
										"Don't include any special characters"
									);
								},
							})}
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
