const GITHUB_USERNAME = "Divyeshram07";

export async function getGithubProfile() {
    const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch GitHub profile");
    }

    return response.json();
}

export async function getGithubRepositories() {
    const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch GitHub repositories");
    }

    return response.json();
}