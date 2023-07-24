import PropTypes from 'prop-types'

function RepoList({repos}) {
  return (
    <div>{repos.length}</div>
  )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList