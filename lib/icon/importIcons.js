let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try{
    importAll(require.context('../static/image',true,/\.svg$/))
}catch (error) {
    
}
