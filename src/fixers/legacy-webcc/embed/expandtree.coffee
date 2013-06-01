pattern = /expandTree\('(\w+)'\),change_navigation\('(.+)'\)/

hide_element = (element) ->
  if element.style
     element.style.display = "none"

toggle_element = (element) ->
  if element.style and element.style.display == "none"
    element.style.display = "block"
  else
    element.style.display = "none"

expand_tree = (treename) ->
  current_node = document.getElementById("#{treename}sub")
  all_div = document.getElementsByTagName("div")
  for i in all_div
    hide_element(all_div[i])
  toggle_element(current_node)

nodes = document.getElementsByClassName('bottom2')

for i in nodes
  return if nodes[i].onclick?
  do
    result = pattern.exec(nodes[i].onclick.toString())
    if result and result.length == 3
      course_id = result[1]
      course_name = result[2]
      nodes[i].onclick = (event) ->
        expand_tree(course_id)
        change_navigation(course_name)
