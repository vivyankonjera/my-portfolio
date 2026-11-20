import React from "react";
import { profile } from "../data/content";

/*
 * Résumé link. Renders nothing until `profile.resumeUrl` is set in content.js.
 */
const ResumeButton = ({ children, className = "btn btnGhost" }) => {
	if (profile.resumeUrl) {
		return (
			<a
				href={profile.resumeUrl}
				className={className}
				target="_blank"
				rel="noreferrer"
				aria-label="View résumé (PDF, opens in a new tab)"
			>
				{children} View résumé
			</a>
		);
	}

	return null;
};

export default ResumeButton;
