Jekyll::Hooks.register :site, :post_write do |site|
    require 'fileutils'
    dir = "_site/categories"
    FileUtils.mkdir_p(dir)
  
    site.categories.each do |category, posts|
      File.open("#{dir}/#{category}.html", "w") do |file|
        file.puts "---"
        file.puts "layout: category"
        file.puts "category: #{category}"
        file.puts "---"
      end
    end
  end
  