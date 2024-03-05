module.exports = {
    username: 'renovate',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    onboarding: false,
    platform: 'github',
    includeForks: true,
    dryRun: 'full',
    //repositories: ['a-cordier/wasm-audio', 'a-cordier/noon-io'],
    autoDiscover: true,
    packageRules: [
      {
        description: 'lockFileMaintenance',
        matchUpdateTypes: [
          'pin',
          'digest',
          'patch',
          'minor',
          'major',
          'lockFileMaintenance',
        ],
        dependencyDashboardApproval: false,
        stabilityDays: 0,
      },
    ],
  };
