import type {Options} from "semantic-release";

const config: Options = {
    "branches": [
        "+([0-9])?(.{+([0-9]),x}).x",
        "main",
        "next",
        "next-major",
        {"name": "beta", "prerelease": true},
        {"name": "alpha", "prerelease": true}
    ],
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/git",
        "@semantic-release/github"
    ]
}

export default config
